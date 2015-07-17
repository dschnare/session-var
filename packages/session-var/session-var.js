SessionVar = function (name, defaultValue) {
	if (defaultValue !== undefined) {
		Session.setDefault(name, defaultValue);
	}

	this._name = name;
};

SessionVar.prototype = {
	constructor: SessionVar,
	get: function () {
		return Session.get(this._name);
	},
	set: function (value) {
		Session.set(this._name, value);
		return this;
	},
	setDefault: function (value) {
		Session.setDefault(this._name, value);
		return this;
	},
	equals: function (value) {
		return Session.equals(this._name, value);
	},
	valueOf: function () {
		return this.get();
	}
};
