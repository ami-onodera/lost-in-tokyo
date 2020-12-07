const Intro = () => (
    <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
        <div className="mb3 mb4-ns">
            Lost in Tokyo is a directory of fun places to see, play in and explore, in Tokyo, Japan. {' '}
        </div>
        <div>
            From museums and galleries, to Robot Restaurants and kitten cafes, Tokyo is the gift that keeps on giving. Dattebayo! {' '}
        </div>
    </div>
)


const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            <Intro />
        </div>
        <div className="flex flex-wrap contyainer">

        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'))