import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Quote functions
export const quoteService = {
  // Create a new quote
  async createQuote(quoteData) {
    const { data, error } = await supabase
      .from('quotes')
      .insert([quoteData])
      .select()

    if (error) throw new Error(error.message)
    return data[0]
  },

  // Get all quotes (for admin)
  async getAllQuotes() {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return data
  },

  // Get quotes by status
  async getQuotesByStatus(status) {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .eq('status', status)
      .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return data
  },

  // Update quote status
  async updateQuoteStatus(id, status) {
    const { data, error } = await supabase
      .from('quotes')
      .update({ status, updated_at: new Date() })
      .eq('id', id)
      .select()

    if (error) throw new Error(error.message)
    return data[0]
  },

  // Get single quote
  async getQuote(id) {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw new Error(error.message)
    return data
  },

  // Delete quote
  async deleteQuote(id) {
    const { error } = await supabase
      .from('quotes')
      .delete()
      .eq('id', id)

    if (error) throw new Error(error.message)
  }
}