import { FormInputLabel, TextArea, Group } from './form-input.styles.jsx'

const CommentArea = ({ label, ...otherProps }) => {
    return (
        <Group>
            <TextArea {...otherProps} />
            <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
        </Group>
    )
}

export default CommentArea