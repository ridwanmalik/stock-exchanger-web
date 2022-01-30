// Fetch By URL
export const fetchByURL = async (url) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`)
    const data = await response.json()
    if (data) {
      return data
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
  }
}
