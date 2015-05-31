var Box = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth,windowHeight: window.innerHeight};
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth,windowHeight: window.innerHeight});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
      return (
          <div className="videoWrapper">
            <iframe 
              src={"//player.vimeo.com/video/" + this.props.code} 
              frameBorder="0" 
              iframe-id='vimeo1'
              api='1'
              player_id='vimeo1'
              width={this.state.windowWidth}
              height={this.state.windowHeight}
              allowFullScreen></iframe>
          </div>
      );
  }
});

var Records = React.createClass({
  
  render: function() {
    return(
      <Box code="115142604" />
      );
  }
});

