mocha.setup("bdd");
//const chai = require("chai");
const { expect } = chai;
import dataBase from 'database';
import events from 'events';

describe("Events tests", () => {

	it("Expect to be a signup form", () => {
		let signForm = events.signUpForm;
		expect(signForm).to.exist;
	});

	/*it("calls the original function", function () {

		console.log(events.signUpForm)

		let spyFunction = sinon.spy();

		spyFunction();
		spyFunction(2, 3, 4);
		spyFunction(7, 6, [1, 'asdf', {}]);


		function sum(...numbers) {
			if (numbers.length === 0) {
				throw 'No numbers';
			}

			return numbers.reduce((a, b) => a + b);
		}

		let s = sum(1, 6, 8, 9, 13);
		console.log(s);

		let sumSpied = sinon.spy(sum);

		let obj = {};

		sumSpied(4, 3, 2, 1);
		try {
			sumSpied();
		}
		catch (e) { }

		sumSpied(1);

		console.log(sumSpied.calledWithExactly(4, 3, 2, 7, 1));


	});*/
});


describe("Login tests", () => {
	const LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username',
		LOCAL_STORAGE_AUTHKEY_KEY = 'signed-in-user-auth-key';

	const clearLocalStorage = () => {
		localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY);
		localStorage.removeItem(LOCAL_STORAGE_AUTHKEY_KEY);
	};


	beforeEach(() => {
		clearLocalStorage;
		localStorage.setItem("LOCAL_STORAGE_EMAIL", "testuser@mail.bg")

	});

	afterEach(() => {
		clearLocalStorage
		localStorage.removeItem("LOCAL_STORAGE_EMAIL")
	});

	describe("User tests", () => {
		describe("Register user", () => {
			let createUser;
			beforeEach(() => {
				createUser = sinon.stub(dataBase, "createUser");
			});
			afterEach(() => {
				createUser.restore();

			});

			it('Expext create user to make a request', (done) => {
				let user = {
					email: "testovUser",
					password: "Parola-123"
				};
				let response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				}

				createUser.returns(Promise.resolve(response));

				createUser(user)
					.then(() => {
						expect(createUser).to.have.been.calledOnce;
					})
					.then(done, done);

			});
			it('Expext create user to be set in the localStorage', (done) => {
				let user = {
					email: "testuser@mail.bg",
					password: "Parola-123"
				};
				let response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				}

				createUser.returns(Promise.resolve(response));

				createUser(user)
					.then(() => {
						console.log(localStorage)
						expect(localStorage.getItem('LOCAL_STORAGE_EMAIL')).to.equal(user.email)
					})
					.then(done, done);

			});
			it('Expext create user to make a request with user', (done) => {
				let user = {
					email: "testovUser",
					password: "Parola-123"
				};
				let response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				}

				createUser.returns(Promise.resolve(response));

				createUser(user)
					.then(() => {
						expect(createUser).to.have.been.calledWith(user);
					})
					.then(done, done);

			});
			it('Expect createUser function to return a Promise', () => {
				const user = {
					username: 'testuser',
					password: '123456'
				};

				const response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				};

				createUser.returns(Promise.resolve(response));

				const promise = createUser(user);
				expect(promise).to.be.an.instanceof(Promise);
			});

		});
		describe("Login tests", () => {
			let loginUser;
			let LOCAL_STORAGE_EMAIL;
			beforeEach(() => {
				localStorage.removeItem("LOCAL_STORAGE_EMAIL")
				loginUser = sinon.stub(dataBase, "loginUser");
			});
			afterEach(() => {
				loginUser.restore();
				localStorage.removeItem("LOCAL_STORAGE_EMAIL")

			});
			it("Test if current user is set in localstorge", (done) => {
				const user = {
					email: 'testuser@mail.bg',
					pass: '123456aA!'
				};
				const response = {
					result: {
						username: user.username,
						authKey: 'SOME_AUTH_KEY'
					}
				};
				localStorage.LOCAL_STORAGE_EMAIL = user.email;
				loginUser.returns(Promise.resolve(response));
				loginUser(user.email, user.pass)
					.then(() => {
						expect(localStorage.getItem('LOCAL_STORAGE_EMAIL')).to.equal(user.email);
					})
					.then(done, done);
			});
		});

	});
});



mocha.run();