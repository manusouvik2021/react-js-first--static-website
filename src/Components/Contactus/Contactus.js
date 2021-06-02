import '../../Astyle.css';
function Contactus() {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"> </div>

                    <div className="col-md-6">

                        <h1 className="cenr">Contact Us</h1>
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Example select</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                           
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>

                    </div>

                    <div className="col-md-3"></div>
                </div>
            </div>


        </section>
    );
}

export default Contactus;