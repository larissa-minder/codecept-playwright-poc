module.exports = {
    ci: {
      collect: {
        numberOfRuns: 1,
        url: [
            "https://mindera.com/",
            "https://mindera.com/services/",
            "https://mindera.com/careers/"        ],
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.8 }],
          'categories:accessibility': ['error', { minScore: 0.9 }],
          'categories:seo': ['error', { minScore: 0.8 }],
        },
      },
    },
  };
  