import { useAuth } from '../hooks/useAuth'
import AdminLogin from '../components/admin/AdminLogin'
import AdminDashboard from '../components/admin/AdminDashboard'

export default function Admin() {
  const { isAdmin } = useAuth()

  if (!isAdmin) {
    return <AdminLogin />
  }

  return <AdminDashboard />
}