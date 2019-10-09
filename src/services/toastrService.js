import toastr from 'toastr'
toastr.options.closeButton = true

class ToastrService {
  info(title, message = '') {
    toastr.info(message, title)
  }

  success(title, message = '') {
    toastr.success(message, title)
  }

  error(title, message = '') {
    toastr.error(message, title)
  }

  warning(title = 'Aviso!', message = '') {
    toastr.warning(message, title)
  }
}

const toastrService = new ToastrService()
export { toastrService }
