export default function getAuthErrorMessage(err) {
    const data = err?.response?.data

    if (!data) {
        return 'Something went wrong. Please try again.'
    }

    return 'Incorrect credentials. Please try again.'
}
