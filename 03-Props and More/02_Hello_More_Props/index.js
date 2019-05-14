class App extends React.Component {
  render() {

    return (
      <div>
        <Hello 
          to="Ringo"
          from="Paul" 
          bangs={4}
          // num={3} // {3} is int, "3" is string
          // data={[1,2,3,4,5]}
          // isFunny={True} // boolean or isFunny (True)
          img="https://images.reverb.com/image/upload/s--HaKO-xMd--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1456790965/axm2h62zencnfbbs6pea.jpg"
        />

        {/* <Hello 
          to="Britney"
          from="Adele" 
          bangs={10}
        /> */}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));