import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {
  }

  public register() {
    // Register your own bindings
  }

  public async boot() {
    const { PlainTextDriver } = await import('./HashDriver')
    const Hash = this.app.container.use('Adonis/Core/Hash')

    Hash.extend('plainText', () => {
      return new PlainTextDriver()
    })
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
