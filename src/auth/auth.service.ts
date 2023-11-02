import {api} from '@src/api'

type SessionResponse = {
  success: boolean
  data: {
    type: string
    message: string
    data: {
      id: number
      created_at: string
      updated_at: string
      email: string
      password: string
      role: string
      verified: boolean
      display_name: string
      company_id: number
      is_master_admin: boolean
      lastname: string | null
      pay_rate: number
      charge_out_rate: number
      image: string | null
    }
  }
}

const session = async () => {
  const response = await api.get<SessionResponse>('/api/auth/session')
  return response.data
}

// Mark - logout
const logout = async () => {
  const response = await api.get('/api/auth/logout')
  return response.data
}

const authService = {
  session,
  logout,
}

export {authService}
export type {SessionResponse}
