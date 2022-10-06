var Config = {
	env: 'dev',
	analyticsName: 'progressiveshopper',
	dev: {
		endpoints : {
			companyData: 'http://localhost:3000/companyData/getOneCompany/'
		}
	},
	test: {
			endpoints : {
			companyData: 'https://api.progressiveshopper.com/sfp/sfpData'
		}
	},
	prod: {
			endpoints : {
			companyData: 'https://api.progressiveshopper.com/sfp/sfpData'
		}
	}
}