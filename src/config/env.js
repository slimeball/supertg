let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://frontend.xfj.com'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = '';
}

export { baseUrl }