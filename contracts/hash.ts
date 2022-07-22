import { PlainTextDriver } from '../providers/HashDriver'

declare module '@ioc:Adonis/Core/Hash' {
  interface HashersList {
    bcrypt: {
      config: BcryptConfig,
      implementation: BcryptContract,
    },
    argon: {
      config: ArgonConfig,
      implementation: ArgonContract,
    },
    plainText: {
      config: {
        driver: 'plainText',
        // ...rest of the config
      }
      implementation: PlainTextDriver
    }
  }
}