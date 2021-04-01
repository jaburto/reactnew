import logo from './logo.svg';
import './App.css';
import { createModel } from './createModel';
import { ReactDiagram } from "gojs-react";
import * as go from 'gojs';

function initDiagram() {
    // var elementsOfModel = [];
    // var linksOfModel = [];
    const $ = go.GraphObject.make;
    //We linked the DIV Id to the diagram


    const canva =
        $(go.Diagram,  // must be the ID or reference to div
            {
                //  allowDrop: true,
                //"animationManager.isEnabled": false,
                //"undoManager.isEnabled": false,
                //isReadOnly: true,
                //allowVerticalScroll: false,
                //allowHorizontalScroll: false,
                initialAutoScale: go.Diagram.Uniform,
                initialContentAlignment: go.Spot.Center,  //ESTE ES EL BUENO PARA MOVER A TODOS LOS GRUPOS
                //layout: $(go.LayeredDigraphLayout)
                //initialContentAlignment: go.Spot.Top,
                /*layout: $(go.LayeredDigraphLayout,
                  {
                  //comparer: go.GridLayout.smartComparer,
                  //wrappingColumn:6
                  direction: 90,
                  columnSpacing: 50,
                  setsPortSpots: false,
                  }),*/

                layout: $(go.GridLayout,
                    {
                        wrappingWidth: Infinity, alignment: go.GridLayout.Position,
                        cellSize: new go.Size(1, 1), spacing: new go.Size(80, 80)
                    })

                // other properties are set by the layout function, defined below
            });


    //canva.layout.isInitial = true;
    //canva.layout.isOngoing = true;


    //We link and draw
    // canva.model = new go.GraphLinksModel(elementsOfModel, linksOfModel);
    //We define a template for Nodes


    canva.nodeTemplate =  $(go.Node, "Horizontal",{
            avoidable: true,
            //avoidableMargin: new go.Margin(30, 2, 2, 2),
            //alignment: go.Spot.TopLeft,
            //fromSpot: go.Spot.Right,  // coming out from middle-right
            //toSpot: go.Spot.Left
        },   // going into at middle-left
        //{ locationSpot: go.Spot.Center},
        // TwoWay Binding
        $(go.Panel, "Auto",
            $(go.Shape, "RoundedRectangle",{fill: "rgba(128,128,128,0.33)"},//Filled gray
                new go.Binding("fill", "color")),

            $(go.TextBlock,
                { margin: 10, font: "10px sans-serif", editable: false,
                    overflow: go.TextBlock.OverflowClip,
                    width: 150, height: 60
                },
                new go.Binding("text", "description")),
        ),


        //PANEL DE LA IMAGEN

        $(go.Panel, "Vertical",new go.Binding("visible", "hasAttributes"),
            $(go.Panel, "Horizontal",
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareOne"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareTwo"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareThree"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareFour"))
                ),
            ),
            $(go.Panel, "Horizontal",
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareFive"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareSix"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareSeven"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareEight"))
                ),
            ),
            $(go.Panel, "Horizontal",
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareNine"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareTen"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareEleven"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareTwelve"))
                ),
            ),
            $(go.Panel, "Horizontal",
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 40, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareThirteen"))
                ),
                $(go.Panel, "Auto",
                    $(go.Shape, "Rectangle", { width: 40, height: 20, fill: "rgba(128,128,128,0.33)"},
                        new go.Binding("fill", "squareFourteen"))
                ),
            )
        )



    );










    /*canva.groupTemplate =
 $(go.Group, "Vertical",

   $(go.Panel, "Auto",
     $(go.Shape, "RoundedRectangle",
       new go.Binding("fill", "color"),
       new go.Binding("visible", "titleVisible")
       ),
     $(go.TextBlock,
     {
         //alignment: go.Spot.Left,
         margin: 10,
     font: "10pt Sans-Serif", editable: false  },
     new go.Binding("text", "description"))
   ),

   $(go.Panel, "Auto",
     $(go.Shape, "RoundedRectangle",
       {fill: "rgba(128,128,128,0.33)" }),//Filled gray
     $(go.Placeholder, { padding: 20})  // Space between each group
   ),
 );*/



    canva.groupTemplate =
        $(go.Group, "Auto",
            // declare the Group.layout:
            {
                alignment: go.Spot.TopLeft,
                avoidable: true,
                //computesBoundsIncludingLocation: true,
                //locationSpot: go.Spot.TopLeft
                //margin: new go.Margin(0, 100, 30, 0),
                /*layout: $(go.GridLayout,{
                wrappingColumn: 2
                })},*/
                selectionAdornmentTemplate: $(go.Adornment, "Auto"),
                layout: $(go.GridLayout, {
                    wrappingColumn: 2,
                    //spacing: go.Size.parse("50 50")
                })

            },

            //new go.Binding("location", "position", go.Point.parse),
            //new go.Binding("wrappingColumn", "sizeOfGroup"),
            $(go.Shape, "RoundedRectangle",  {fill: "rgba(128,128,128,0.33)" } ,
                new go.Binding("fill", "color"),
                //new go.Binding("visible", "titleVisible")
            ),
            $(go.Panel, "Vertical",  // position header above the subgraph
                $(go.TextBlock,     // group title near top, next to button
                    {margin: 6,
                        font: "10pt Sans-Serif",
                        editable: false  },
                    new go.Binding("text", "description")),
                $(go.Placeholder,     // represents area for all member parts
                    { padding: 30,

                        background: "white",
                        alignment: go.Spot.Top,
                    })
            )
        );










    canva.linkTemplate =
        $(go.Link,
            { routing: go.Link.AvoidsNodes, corner: 15,
                curve: go.Link.JumpOver,reshapable: true,
                resegmentable: true,
                relinkableFrom: true,
                relinkableTo: true,
            },
            $(go.Shape,
                new go.Binding("stroke", "color"),
                new go.Binding("strokeDashArray", "typeOfLink"),
                new go.Binding("strokeWidth", "isStrong")
            ),

            $(go.Shape, { toArrow: "Standard" },
                new go.Binding("stroke", "color"),
                new go.Binding("fill", "color"),
                new go.Binding("strokeWidth", "isStrong")
            )
        );

    return canva;
}
function graphLinksModel() {
    const elementsOfModel = [
        { key: 0, description: 'Alpha', color: 'lightblue', loc: '0 0' },
        { key: 1, text: 'Beta', color: 'orange', loc: '150 0' }
    ];

    const linksOfModel = [
        { from: 0, to: 1 }
    ];

    return new go.GraphLinksModel(elementsOfModel,linksOfModel);
}

function App() {
  return (
      <div>
        ...
        <ReactDiagram initDiagram={initDiagram} divClassName={'canva-div'} modelData={graphLinksModel}
        />

        ...
      </div>
  );
}
//new go.GraphLinksModel(elementsOfModel, linksOfModel);
export default App;
