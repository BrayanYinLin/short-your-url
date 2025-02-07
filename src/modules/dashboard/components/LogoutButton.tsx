import { useNavigate } from 'react-router'
import { logoutUser } from '../lib/services'

export function LogoutButton() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    logoutUser().then((success) => navigate('/', { replace: success }))
  }

  return (
    <button type="button" onClick={handleLogout}>
      Log Out
    </button>
  )
}
