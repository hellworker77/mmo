export type FileInputValidator =
    NullIsNotAllowedValidator |
    AllowedExtensionsValidator |
    MaxSizeValidator

export const NullIsNotAllowed = "NullIsNotAllowed"
export const AllowedExtensions = "AllowedExtensions"
export const MaxSize = "MaxSize"

type NullIsNotAllowedValidator = {
    type: typeof NullIsNotAllowed
}
type AllowedExtensionsValidator = {
    type: typeof AllowedExtensions
    extensions: string[]
}
type MaxSizeValidator = {
    type: typeof MaxSize
    size: number
}