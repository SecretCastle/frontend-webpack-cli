module.exports = {
    "env": {
        "browser": true,
		"es6": true,
		"node": true
    },
    "extends": ["plugin:prettier/recommended", "eslint:recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
	},
	"parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
		"react",
		"prettier"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
		],
		"prettier/prettier": [
			"error",
			{
				tabWidth: 4, // tab宽度
				useTabs: true, // 开启tab
				semi: true, //开启 ';' 结尾
				singleQuote: true, // 开启单引号
				jsxSingleQuote: true, // jsx中开启单引号
				requirePragma: true, // 开启注释
				insertPragma: true
			}
		]
	}
};
