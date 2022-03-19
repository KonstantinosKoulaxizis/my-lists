interface EditFieldModel {
  text: string
  shouldEdit: boolean
  largeFonts: boolean
  updateAction: (value: string) => void
}

export default EditFieldModel
