Feature("Performance Check with Lighthouse")
	.config({
		chromium: {
			args: [`--remote-debugging-port=9222`],
		},
	})
    
	Scenario('performanceTest', ({I}) => {

		const filenameLighthouseReport = `lighthouse-report`
		const directoryLighthouseReport = `output`
	
	
		I.amOnPage          ('<https://www.example.com>');
	
		I.usePlaywrightTo('run Lighthouse audit', async ({page}) => {
			await playAudit({
				page: page,
				thresholds: {
					performance: 65,
					accessibility: 88,
					'best-practices': 94,
					seo: 64,
					pwa: 0,
				},
				reports: {
					formats: {
						json: false, //defaults to false
						html: true, //defaults to false
						csv: false, //defaults to false
					},
					name: filenameLighthouseReport, // if you dont specify value would be `lighthouse-${new Date().getTime()}`
					directory: directoryLighthouseReport, // if you dont specify value would be `${process.cwd()}/lighthouse`
				},
				port: 9222,
			});
		})
});
