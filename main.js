const { Plugin } = require('obsidian');

module.exports = class PasswordVaultPlugin extends Plugin {
  async onload() {
    console.log('Loading Password Vault Plugin');
    
    this.addCommand({
      id: 'open-password-vault',
      name: 'Open Password Vault',
      callback: () => {
        console.log('Opening password vault...');
      }
    });
  }

  async onunload() {
    console.log('Unloading Password Vault Plugin');
  }
}
