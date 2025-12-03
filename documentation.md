# JavaScript Programming Fundamentals Documentation
In JavaScript programming fundamentals we were tasked with creating and showing off five elements of javascript; the five elements had to display the following:
* Element 1: Demonstration of basic shapes, lighting, textures, shadows, and motion.
* Element 2: Demonstration of a 3D environment placing a selection of individual and cloned textured meshes within a 360-degree scene with background image, textured terrain using a height map, appropriate lighting, and constrained camera motion.
* Element 3: Demonstration of a movable player mesh incorporating player functional animations. Interaction between player and other objects using physics.
* Element 4: Demonstration of a Graphic user interface featuring a menu system and transitions from menu to an interactive scene. At least one GUI element should change in response to scene events.
* Element 5: Demonstration of at least two scenes which can be switched between either by GUI or in response to scene events. Each scene should incorporate the techniques explored in the module.

This documentation shall focus on Element 5.

## Element 5 Documentation

Element 5 features multiple scenes that can be swapped between using buttons implemented through GUI. For my fifth element, each scene has the same foundation: a ground plane with a sphere floating just above. Although each scene features a different shape that appears at different points around the sphere to further emphasise that each scene is indeed different.

* Scene 1: Depicts a cube floating above the sphere
* Scene 2: Depicts a cylinder floating just diagonal to the side of the sphere, the cylinder is textured.
* Scene 3: Depicts a donut floating diagonally and above the sphere, the donut is textured.
* Scene 4: Depicts a tube sitting to the side of the sphere. The tube is tilted at almost 45 degrees, the tube is textured.

Prior to being built using "npm run element05build", the fifth element sat in a folder named "element05", which was made up of two folders: assets and src. The assets folder contains the image that is applied like a texture to the shapes surrounding the sphere in the scenes, and the src folder contained all the typescript files for all the scenes and the GUI.

Once built it creates a folder called "dist" which holds the now built files; the index file has changed, pulling from the fresh files within the assets folder.


Although the fifth element gives the most opportunity to be creative and implement various techniques utilised throughout the course
