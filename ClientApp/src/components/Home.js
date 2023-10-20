import React, { Component } from 'react';
import MapComponent from './MapComponent';

export class Home extends Component {
    static displayName = Home.name;

    render() {
    return (
      <div>
        <h1>Welcome to my portfolio</h1>
            <p>My name is Joe Lee. I'm a full stack software developer with over 15 years of development experience.</p>
            <p>My expertise include the following:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core MVC</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for REST API server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='https://esri.com/'>ESRI</a> for GIS Technology</li>
                <li><a href='https://python.org'>Python</a> for spatial analysis and geoprocessing code</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>

        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>

        <p>Below is my recent ESRI project that shows the EV charging stations in downtown Vancouver with 3D map:</p>
            <MapComponent />
      </div>
    );
  }
}
