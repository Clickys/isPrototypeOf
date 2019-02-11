function isPrototypeOf(prototypeObj, objectToCheck) {
	if (prototypeObj === Object.getPrototypeOf(objectToCheck)) {
		return true;
	}

	if (Object.getPrototypeOf(objectToCheck)) {
		return isPrototypeOf(prototypeObj, Object.getPrototypeOf(objectToCheck));
	} else {
		return false;
	}
}

