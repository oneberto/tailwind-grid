const generateArray = (length: number) =>
    [...(new Array(length).keys() as any)] as number[];

const App = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {generateArray(10).map((i) => (
                <img
                    className="flex"
                    key={i}
                    src={
                        "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                    }
                    alt="Test"
                />
            ))}
        </div>
    );
};

export default App;
