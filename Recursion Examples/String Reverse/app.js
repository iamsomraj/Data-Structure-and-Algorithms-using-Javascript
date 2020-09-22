const rev = (string) => {
	if (string.length === 0) {
		return string;
	}
	return (
		string.charAt(string.length - 1) +
		rev(string.substring(0, string.length - 1))
	);
};

console.log(rev("Somraj"));
