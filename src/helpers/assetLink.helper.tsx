import {LOCAL_FILE_URL, LOCAL_IMAGE_URL} from '@env'
import moment from 'moment'

export const getAssetUrl = (asset: Api.AssetDetailsType) => {
  return `${LOCAL_IMAGE_URL}${asset?.name}`
}

export const getPdfLink = (file: string) => {
  return `${LOCAL_FILE_URL}${file}`
}

export const getTileUrl = (projectId: number, projectPlanId: number) => {
  return `${LOCAL_IMAGE_URL}projects/${projectId}/plans/${projectPlanId}/fptiles/{z}/{x}/{y}.png`
}

export const getAssetName = (asset: Api.AssetDetailsType) => {
  const assetName = asset?.name

  const tempName = assetName?.split('/')?.at(-1)?.split('.')

  const modifiedName = moment(new Date(Number(tempName?.at(0)))).format(
    'YYYY/MM/DD-hh:mma',
  )

  return `${modifiedName}.${tempName?.at(-1)}`
}
