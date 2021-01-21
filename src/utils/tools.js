const checkKeys = (key, cancel, save) => {
	if (key) {
		if (key === 'Escape') {
			cancel();
		} else if (key === 'Enter') {
			save();
		}
	}
};

export { checkKeys };
