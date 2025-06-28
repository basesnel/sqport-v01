class Network {
  static #topologies = [
    "ring",
    "mesh",
    "star",
    "fullyConnected",
    "line",
    "tree",
    "bus",
  ];

  static #geoScales = ["nano", "PAN", "LAN", "CAN", "WAN"];

  static #overlayNetworks = ["internet", "p2p", "vpn", "darknet"];

  static isNetworkOverlay(network) {
    Network.#overlayNetworks.includes(network);
  }

  constructor({ entity, name, topology, geoScale, isOverlay }) {
    this.entity = entity;
    this.name = name;
    this.topology = topology;
    this.geoScale = geoScale;
    this.isOverlay = isOverlay;
  }
}

export { Network };
