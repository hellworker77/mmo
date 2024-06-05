export type InputValidator =
    EmptyNotAllowedValidator |
    MinLengthValidator |
    MaxLengthValidator |
    OnlyDateAllowedValidator |
    LengthValidator |
    OnlyDigitAllowedValidator

export const EmptyNotAllowed = "EmptyNotAllowed"
export const MinLength = "MinLength"
export const MaxLength = "MaxLength"
export const OnlyDateAllowed = "OnlyDateAllowed"
export const Length = "Length"
export const OnlyDigitAllowed = "OnlyDigitAllowed"

type EmptyNotAllowedValidator = {
    type: typeof EmptyNotAllowed
}
type MinLengthValidator = {
    type: typeof MinLength
    minLength: number
}
type MaxLengthValidator = {
    type: typeof MaxLength
    maxLength: number
}
type OnlyDateAllowedValidator = {
    type: typeof OnlyDateAllowed
}
type LengthValidator = {
    type: typeof Length
    length: number
}
type OnlyDigitAllowedValidator ={
    type: typeof OnlyDigitAllowed
}