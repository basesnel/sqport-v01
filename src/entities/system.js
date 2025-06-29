class System {
  constructor({
    entity,
    developer,
    name,
    logo,
    family,
    version,
    release,
    packageManager,
    platforms,
    kernel,
    defaultInterface,
    license,
  }) {
    this.entity = entity;
    this.developer = developer;
    this.name = name;
    this.logo = logo;
    this.family = family;
    this.version = version;
    this.release = release;
    this.packageManager = packageManager;
    this.platforms = platforms;
    this.kernel = kernel;
    this.defaultInterface = defaultInterface;
    this.license = license;
  }
}

export { System };
