import React from "react"
import Link from "next/link"
function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "")
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ("00" + c).substr(c.length)
  }

  return rgb
}

const getProductid = (url) => {
  // console.log(url);
}

class Module extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.state = {
      isHovered: false
    }
  }

  toggleHidden() {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  render() {
    const lightBackgroundColor = ColorLuminance(this.props.color, 1.5)
    const styles = {
      backgroundColor: lightBackgroundColor
    }
    const textS = {}
    const icoS = {}

    if (this.state.isHovered) {
      styles["backgroundColor"] = "#5292A414"
      styles["color"] = "#000"
      textS["fontWeight"] = "700"
      icoS["fontWeight"] = "700"
    }

    icoS["float"] = "right"
    icoS["color"] = "#000"

    return (
      <div
        className="singleModule"
        onMouseEnter={this.toggleHidden}
        onMouseLeave={this.toggleHidden}
        onClick={() => {
          getProductid(this.props.url)
        }}
        style={styles}
      >
        <span style={textS}>{this.props.id}</span>{" "}
        <i className={`fa ${this.props.icon}`} style={icoS}></i>
      </div>
    )
  }
}

class ModuleG extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.state = {
      isVisible: false
    }
  }

  toggleHidden() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const lightBackgroundColor = ColorLuminance(this.props.color, 1.5)

    // Only make bg color if on hover
    const bgStyle = {}
    const textS = {}
    const icoS = {}
    if (this.state.isVisible) {
      bgStyle["backgroundColor"] = "#5292A414"
      bgStyle["borderLeft"] = `5px solid #5292A4`
      textS["fontWeight"] = "700"
      icoS["fontWeight"] = "700"
    }

    icoS["float"] = "right"
    icoS["color"] = "#000"
    return (
      <div
        className="moduleGroup"
        onMouseEnter={this.toggleHidden}
        onMouseLeave={this.toggleHidden}
        style={bgStyle}
      >
        <Link href={this.props.mainmenu + this.props.url} passHref>
          <div
            className="span-with-link"
            onClick={() => {
              getProductid(this.props.url)
            }}
          >
            <span style={textS}>{this.props.id}</span>
            <i className={`fa ${this.props.icon}`} style={icoS}></i>
            {this.props.modules.length > 0 ? (
              <i className={`fa ${this.props.icon}`} style={icoS}></i>
            ) : null}
          </div>
        </Link>

        <div className={`modulesSet ${this.state.isVisible ? "visible" : ""}`}>
          {this.props.modules.map((module) => (
            <Module
              key={module.key}
              id={module.key}
              url={module.url}
              icon={module.icon}
              mainmenu={this.props.mainmenu}
              lightColor={lightBackgroundColor}
              color={this.props.color}
            />
          ))}
        </div>
      </div>
    )
  }
}

class ModuleGroup extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.state = {
      isVisible: false
    }
  }

  toggleHidden() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const lightBackgroundColor = ColorLuminance(this.props.color, 1.5)

    // Only make bg color if on hover
    const bgStyle = {}
    const textS = {}
    const icoS = {}
    bgStyle["padding"] = "0px"
    if (this.state.isVisible) {
      bgStyle["backgroundColor"] = "#5292A414"
      bgStyle["borderLeft"] = `5px solid #5292A4`
      textS["fontWeight"] = "700"
      icoS["fontWeight"] = "700"
    }

    icoS["float"] = "right"
    icoS["color"] = "#000"
    return (
      <div
        className="moduleGroup"
        onMouseEnter={this.toggleHidden}
        onMouseLeave={this.toggleHidden}
        style={bgStyle}
      >
        <div className="modulesbg">
          <Link href={this.props.mainmenu + this.props.url} passHref>
            <div
              className="span-with-link"
              onClick={() => {
                getProductid(this.props.url)
              }}
            >
              <span style={textS}>{this.props.id}</span>
              {this.props.modules.length > 0 ? (
                <i className={`fa ${this.props.icon}`} style={icoS}></i>
              ) : null}
            </div>
          </Link>

          <div
            className={`modulesSet ${this.state.isVisible ? "visible" : ""}`}
          >
            {this.props.modules.map((module) => (
              <ModuleG
                key={module.key}
                id={module.key}
                url={module.url}
                icon={module.icon}
                mainmenu={this.props.mainmenu + this.props.url}
                modules={module.modules}
                lightColor={lightBackgroundColor}
                color={this.props.color}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

class SubModuleGroup extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.state = {
      isVisible: false
    }
  }

  toggleHidden() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const lightBackgroundColor = ColorLuminance(this.props.color, 1.5)

    // Only make bg color if on hover
    const bgStyle = {}
    const textS = {}
    const icoS = {}
    if (this.state.isVisible) {
      bgStyle["backgroundColor"] = "#5292A414"
      bgStyle["borderLeft"] = `5px solid #5292A4`
      textS["fontWeight"] = "700"
      icoS["fontWeight"] = "700"
    }

    icoS["float"] = "right"
    icoS["color"] = "#000"

    return this.props.is_page ? (
      <div
        className="moduleGroup"
        onMouseEnter={this.toggleHidden}
        onMouseLeave={this.toggleHidden}
        style={bgStyle}
      >
        <Link href={this.props.url} passHref>
          <div
            className="span-with-link"
            onClick={() => {
              getProductid(this.props.url)
            }}
          >
            <span style={textS}>{this.props.id}</span>
            {this.props.submodules.length > 0 ? (
              <i className={`fa ${this.props.icon}`} style={icoS}></i>
            ) : null}
          </div>
        </Link>
      </div>
    ) : (
      <div
        className="moduleGroup"
        onMouseEnter={this.toggleHidden}
        onMouseLeave={this.toggleHidden}
        style={bgStyle}
      >
        <Link href={this.props.mainmenu + this.props.url} passHref>
          <div
            className="span-with-link"
            onClick={() => {
              getProductid(this.props.url)
            }}
          >
            <span style={textS}>{this.props.id}</span>
            {this.props.submodules.length > 0 ? (
              <i className={`fa ${this.props.icon}`} style={icoS}></i>
            ) : null}
          </div>
        </Link>

        <div className={`modulesSet ${this.state.isVisible ? "visible" : ""}`}>
          {this.props.submodules.map((module) => (
            <ModuleGroup
              key={module.key}
              id={module.key}
              url={module.url}
              icon={module.icon}
              mainmenu={this.props.mainmenu + this.props.url}
              lightColor={lightBackgroundColor}
              color={this.props.color}
              modules={module.modules}
            />
          ))}
        </div>
      </div>
    )
  }
}

class ModuleGroupSelector extends React.Component {
  constructor(props) {
    super(props)
    this.toggleHidden = this.toggleHidden.bind(this)
    this.state = {
      isVisible: false
    }
  }

  toggleHidden() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const moduleGroups = this.props.moduleGroups
    // Only make bg color if on hover
    const bgStyle = {}
    const txtStyle = {}
    const icoS = {}
    var openmn = false

    icoS["color"] = "#fff"
    if (this.state.isVisible) {
      bgStyle["backgroundColor"] = "#fff"
      txtStyle["fontWeight"] = "700"
      icoS["fontWeight"] = "700"

      txtStyle["color"] = "#000"
      icoS["color"] = "#000"
      var openmn = true
    }
    txtStyle["fontWeight"] = "700"
    if (this.props.name == "Promotions") {
      txtStyle["color"] = "#fff"
      txtStyle["paddingLeft"] = "5px"
      txtStyle["paddingRight"] = "5px"
    }

    return this.props.is_page ? (
      <div
        className={`analytics ${
          this.props.name == "Promotions" ? "Promotions-btn" : ""
        }`}
        style={bgStyle}
      >
        <Link href={this.props.url != "/null" ? this.props.url : "#"}>
          <div className="topButton" style={txtStyle}>
            {this.props.name}
          </div>
        </Link>
      </div>
    ) : (
      <div
        className="analytics"
        style={bgStyle}
        onMouseEnter={!openmn ? this.toggleHidden : null}
        onMouseLeave={openmn ? this.toggleHidden : null}
      >
        <Link href={this.props.url != "" ? this.props.url : "#"}>
          <div
            className="topButton"
            style={txtStyle}
            onClick={() => {
              getProductid(this.props.url)
            }}
          >
            {this.props.name}
            {moduleGroups.length > 0 ? (
              <i className={`m-2 fa ${this.props.icon}`} style={icoS}></i>
            ) : null}
          </div>
        </Link>
        <div
          className={`analyticsDropDown ${
            this.state.isVisible ? "visible" : ""
          }`}
        >
          <div
            className={`modulesSet1 ${this.state.isVisible ? "visible" : ""}`}
          >
            {moduleGroups.map((group) => (
              <SubModuleGroup
                key={group.key}
                mainmenu={"/" + this.props.name}
                url={group.url}
                id={group.key}
                color={group.color}
                icon={group.icon}
                submodules={group.modules}
                is_page={group.is_page}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

class Menu extends React.Component {
  render() {
    const availableModules = this.props.availableModules
    return (
      <div className="navbar">
        {availableModules.map((group) => (
          <ModuleGroupSelector
            name={group.name}
            url={group.url}
            key={group.key}
            id={group.key}
            is_page={group.is_page}
            color={group.color}
            icon={group.icon}
            moduleGroups={group.modules}
          />
        ))}
      </div>
    )
  }
}

export default Menu
