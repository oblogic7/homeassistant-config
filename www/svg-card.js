class SVGCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
    	this.initCard();
    }
    
    for (var key in hass.states) {
      if (hass.states.hasOwnProperty(key)) {
      }
    } 
    //const state = hass.states[entityId];
    //const stateStr = state ? state.state : 'unavailable';
    
  }

  initCard() { 

      // add default styles
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.type = 'text/css';
      link.href = '/local/svg-card.css';
      this.appendChild(link); 

      const card = document.createElement('ha-card');
      card.header = this.config.title || 'SVG';
      this.content = document.createElement('svg');
      this.content.setAttribute("id", "svgContainer");
      this.content.style.padding = '0 16px 16px';
      card.appendChild(this.content);
      this.appendChild(card);
      
      const svg = Snap('#svgContainer');
     console.log(svg); 
      Snap.load(this.config.svg_url, function(data) {
          svg.append(data);
      });
  }

  setConfig(config) {
    if (!config.svg_url) {
      throw new Error('SVG source not specified.');
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}

customElements.define('svg-card', SVGCard);
