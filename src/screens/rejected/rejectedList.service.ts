import AsyncStorage from '@react-native-async-storage/async-storage'

import {api} from '@src/api'

type LoginRequest = {
  email: string
  password: string
}

//Mark - rejectedList
const rejectedList = async (data: LoginRequest) => {
  const response = await api.post<Api.LoginResponse>('/api/auth/login', data)

  if (response.data.success) {
    try {
      await AsyncStorage.setItem('@token', response.data.data.data.token)
    } catch (e) {
      console.error('Error', e)
    }
  }

  return response.data
}

const rejectedListService = {
  rejectedList,
}

export {rejectedListService}
