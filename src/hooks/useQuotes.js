import { useState, useEffect } from 'react'
import { quoteService } from '../services/supabase'

export function useQuotes() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchQuotes = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await quoteService.getAllQuotes()
      setQuotes(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchQuotesByStatus = async (status) => {
    setLoading(true)
    setError(null)
    try {
      const data = await quoteService.getQuotesByStatus(status)
      setQuotes(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await quoteService.updateQuoteStatus(id, status)
      setQuotes(quotes.map(q => q.id === id ? { ...q, status } : q))
    } catch (err) {
      setError(err.message)
    }
  }

  const deleteQuote = async (id) => {
    try {
      await quoteService.deleteQuote(id)
      setQuotes(quotes.filter(q => q.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return {
    quotes,
    loading,
    error,
    fetchQuotes,
    fetchQuotesByStatus,
    updateStatus,
    deleteQuote
  }
}