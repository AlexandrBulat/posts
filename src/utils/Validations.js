
export const notNull = (value) => value ? '' : 'This field is required'

export const getValue = (value) => null

export const email = (value) => {
	if (!/\S+@\S+\.\S+/.test(value)) {
		return 'Not an email address'
	} else {
		return ''
	}
}

export const length = (value) => {
	if (value && value.length >= 6) {
		return ''
	} else {
		return `Minimum length ${6}`
	}
}

export const lengthName = (value) => {
	if (value && value.length >= 3) {
		return ''
	} else {
		return `Minimum length ${3}`
	}
}

export const nameLength = (value) => {
	if (value && value.length >= 1) {
		return ''
	} else {
		return `Minimum length ${1}`
	}
}

export const passwordConfirm = (password) => {
	return function (value) {
		if (value === password) {
			return ''
		} else {
			return "Password not equals"
		}
	}
}

export const isErrorEmpty = (error) => {
	return Object.keys(error).length === 0
}
