import { useRef, useEffect } from "react";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView.js";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import Search from "@arcgis/core/widgets/Search";
import Daylight from "@arcgis/core/widgets/Daylight";
import Weather from "@arcgis/core/widgets/Weather";
import Legend from "@arcgis/core/widgets/Legend";

const MapComponent = () => {

    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {

            const map = new WebScene({
                portalItem: {
                    id: "a053ee1fd39b439e92d4a65b6932c227"
                }
            });

            const view = new SceneView({
                container: mapDiv.current,
                map: map,
                camera: {
                    position: {
                        longitude: -123.115,
                        latitude: 49.25,
                        z: 2000
                    },
                    heading: 0,
                    tilt: 55
                } // Vancouver
            });

            const basemapGallery = new BasemapGallery({
                view: view
            });

            const searchWidget = new Search({
                view: view
            });

            const weatherExpand = new Expand({
                view: view,
                content: new Weather({
                    view: view
                }),
                group: "top-right",
                expanded: false
            });

            const daylightExpand = new Expand({
                view: view,
                content: new Daylight({
                    view: view
                }),
                group: "top-right"
            });

            const legend = new Legend({
                view: view
            });

            view.ui.add(searchWidget, "top-right");
            view.ui.add(new Expand({ content: basemapGallery, view: view, expanded: false }), "top-right");
            view.ui.add([weatherExpand, daylightExpand], "top-right");
            view.ui.add(legend, "bottom-right");            

            return () => view && view.destroy()

        }
    }, []);

    return <div className="mapDiv" ref={mapDiv} style={{ height: '100vh', width: "100%" }}></div>;
}

export default MapComponent;