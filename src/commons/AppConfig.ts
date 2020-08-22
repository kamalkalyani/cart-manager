const dotenv = require('dotenv')

enum CONFIG_PROPS {
    DB_HOST = 'DB_HOST',
    DB_NAME = "DB_NAME"
}

class AppConfig {
    private _config: any = {}
    private _configFile = process.env.ENV_FILE

    constructor() {
        console.log(`ENV FILE ${this._configFile}`)
        this._config = dotenv.config({ path: this._configFile })
    }

    getConfig = (key: string) => process.env[key]

    getProps = () => CONFIG_PROPS

}

const appConfig = new AppConfig()
export default appConfig


