import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'

import { ResetPasswordPayload } from '../../team/types'
import { transformError } from '@/app/utils/utils'
import { fetchData } from '@/app/utils/fetchData'


export const useResetPassword = () => {
  return useMutation<Response, AxiosError, ResetPasswordPayload>({
    mutationFn: (payload) =>
      fetchData<ResetPasswordPayload>(
        '/admin/auth/reset-password',
        'POST',
        payload
      ),

    onSuccess: () => {
      toast.success('Password successfully changed.')
    },
    onError: (error) => {
      toast.error(transformError(error))
    },
  })
}
