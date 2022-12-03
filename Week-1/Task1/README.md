
What happens when user enters a url in browser:
The Url is first sent to DNS server where domain is converted to IP and sent to server and the server gets the desired webpage from world wide web
![image](https://user-images.githubusercontent.com/59130610/185695714-b06513f4-2e1f-44c4-9f89-1d482e2b61f3.png)






What is the main functionality of a browser:
The main function is to retrieve information from the World Wide Web and making it available for users
What are the high level components of a browser:
The high level components of a browser are : The User Interface, The Browser Engine, The Rendering Engine, Networking, JavaScript Interpreter, UI Backend, Data Persistence/Storage

![image](https://user-images.githubusercontent.com/59130610/185696757-fbf2c7ea-7240-44a0-9f74-fc0d51d5bfc1.png)



Rendering Engine and script processor:
The networking layer will start sending the contents of the requested documents to the rendering engine in chunks of 8KBs.
The rendering engine parses the chunks of HTML document and convert the elements to DOM nodes in a tree called the “content tree” or the “DOM tree”.

![image](https://user-images.githubusercontent.com/59130610/185696366-375abaf8-0625-437b-9520-4e311a77bc73.png)



Script Processors:
The rendering engine parses the chunks of HTML document and convert the elements to DOM nodes in a tree called the “content tree” or the “DOM tree”. It also parses both the external CSS files as well in style elements.
Tree construction:
While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order. Firefox calls the elements in the render tree “frames”. WebKit uses the term renderer or render object.

Layout and Painting:
After the construction of the render tree, it goes through a “layout process” of the render tree. When the renderer is created and added to the tree, it does not have a position and size. The process of calculating these values is called layout or reflow. This means giving each node the exact coordinates where it should appear on the screen. The position of the root renderer is 0,0 and its dimensions are the viewport–the visible part of the browser window. All renderers have a “layout” or “reflow” method, each renderer invokes the layout method of its children that need layout.The next stage is painting. In the painting stage, the render tree is traversed and the renderer’s “paint()” method is called to display content on the screen. Painting uses the UI backend layer.The rendering engine always tries to display the contents on the screen as soon as possible for better user experience. It does not wait for the HTML parsing to complete before starting to build and layout the render tree. It parses and displays the content it has received from the network, while rest of the contents stills keeps coming from the network.


References
https://medium.com/@monica1109/how-does-web-browsers-work-c95ad628a509
https://www.youtube.com/watch?v=hJHvdBlSxug
