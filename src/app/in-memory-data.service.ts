import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const devices = [
        {"id":1,"deviceType":"A","measures":"humidity","currentReading":79,"description":"congue etiam justo etiam pretium iaculis justo in hac habitasse","status":true},
        {"id":2,"deviceType":"A","measures":"humidity","currentReading":38,"description":"velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit","status":true},
        {"id":3,"deviceType":"A","measures":"humidity","currentReading":54,"description":"tellus nulla ut erat id","status":true},
        {"id":4,"deviceType":"A","measures":"humidity","currentReading":54,"description":"est donec odio justo sollicitudin ut suscipit a","status":true},
        {"id":5,"deviceType":"A","measures":"humidity","currentReading":89,"description":"nibh in quis justo maecenas rhoncus aliquam lacus","status":true},
        {"id":6,"deviceType":"A","measures":"humidity","currentReading":16,"description":"augue vestibulum ante ipsum primis in faucibus","status":true},
        {"id":7,"deviceType":"A","measures":"humidity","currentReading":91,"description":"vel ipsum praesent blandit lacinia erat vestibulum sed magna at","status":true},
        {"id":8,"deviceType":"A","measures":"humidity","currentReading":64,"description":"pede posuere nonummy integer non velit donec diam","status":true},
        {"id":9,"deviceType":"A","measures":"humidity","currentReading":74,"description":"urna pretium nisl ut volutpat sapien","status":true},
        {"id":10,"deviceType":"A","measures":"humidity","currentReading":90,"description":"quis libero nullam sit amet turpis elementum","status":true},
        {"id":11,"deviceType":"A","measures":"humidity","currentReading":16,"description":"bibendum felis sed interdum venenatis turpis enim blandit","status":true},
        {"id":12,"deviceType":"A","measures":"humidity","currentReading":17,"description":"blandit mi in porttitor pede justo eu massa donec","status":true},
        {"id":13,"deviceType":"A","measures":"humidity","currentReading":27,"description":"pede libero quis orci nullam molestie nibh in","status":true},
        {"id":14,"deviceType":"A","measures":"humidity","currentReading":35,"description":"in lectus pellentesque at nulla suspendisse","status":false},
        {"id":15,"deviceType":"A","measures":"humidity","currentReading":62,"description":"vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl","status":true},
        {"id":16,"deviceType":"B","measures":"location","currentReading":92804,"description":"vel ipsum praesent blandit lacinia erat vestibulum","status":true},
        {"id":17,"deviceType":"B","measures":"location","currentReading":92804,"description":"sit amet nulla quisque arcu libero rutrum ac","status":true},
        {"id":18,"deviceType":"B","measures":"location","currentReading":92804,"description":"sapien arcu sed augue aliquam erat volutpat in congue","status":true},
        {"id":19,"deviceType":"B","measures":"location","currentReading":92804,"description":"dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at","status":true},
        {"id":20,"deviceType":"B","measures":"location","currentReading":92804,"description":"duis at velit eu est congue elementum in hac habitasse","status":true},
        {"id":21,"deviceType":"B","measures":"location","currentReading":92886,"description":"nulla nisl nunc nisl duis bibendum felis","status":true},
        {"id":22,"deviceType":"B","measures":"location","currentReading":92833,"description":"rhoncus sed vestibulum sit amet cursus","status":false},
        {"id":23,"deviceType":"B","measures":"location","currentReading":92833,"description":"in felis eu sapien cursus vestibulum proin eu mi","status":true},
        {"id":24,"deviceType":"B","measures":"location","currentReading":92626,"description":"ultrices mattis odio donec vitae nisi","status":true},
        {"id":25,"deviceType":"B","measures":"location","currentReading":92626,"description":"nec sem duis aliquam convallis","status":true},
        {"id":26,"deviceType":"B","measures":"location","currentReading":92626,"description":"aliquet pulvinar sed nisl nunc rhoncus dui vel sem","status":true},
        {"id":27,"deviceType":"B","measures":"location","currentReading":92780,"description":"orci pede venenatis non sodales sed tincidunt","status":true},
        {"id":28,"deviceType":"B","measures":"location","currentReading":92780,"description":"elit proin risus praesent lectus vestibulum quam sapien varius","status":true},
        {"id":29,"deviceType":"B","measures":"location","currentReading":92780,"description":"justo nec condimentum neque sapien placerat ante nulla","status":true},
        {"id":30,"deviceType":"B","measures":"location","currentReading":92780,"description":"magna vulputate luctus cum sociis natoque penatibus","status":true},
        {"id":31,"deviceType":"C","measures":"temperature","currentReading":147,"description":"rhoncus aliquam lacus morbi quis tortor id nulla ultrices","status":false},
        {"id":32,"deviceType":"C","measures":"temperature","currentReading":61,"description":"pede morbi porttitor lorem id ligula suspendisse ornare consequat","status":true},
        {"id":33,"deviceType":"C","measures":"temperature","currentReading":34,"description":"elementum in hac habitasse platea dictumst morbi","status":true},
        {"id":34,"deviceType":"C","measures":"temperature","currentReading":95,"description":"ante ipsum primis in faucibus orci luctus et ultrices posuere","status":true},
        {"id":35,"deviceType":"C","measures":"temperature","currentReading":95,"description":"nisl duis bibendum felis sed interdum venenatis turpis enim","status":true},
        {"id":36,"deviceType":"C","measures":"temperature","currentReading":28,"description":"risus dapibus augue vel accumsan tellus","status":true},
        {"id":37,"deviceType":"C","measures":"temperature","currentReading":162,"description":"ac consequat metus sapien ut nunc vestibulum ante ipsum primis","status":true},
        {"id":38,"deviceType":"C","measures":"temperature","currentReading":34,"description":"nullam orci pede venenatis non sodales sed tincidunt eu","status":true},
        {"id":39,"deviceType":"C","measures":"temperature","currentReading":154,"description":"purus sit amet nulla quisque arcu libero rutrum","status":true},
        {"id":40,"deviceType":"C","measures":"temperature","currentReading":5,"description":"maecenas pulvinar lobortis est phasellus","status":false},
        {"id":41,"deviceType":"C","measures":"temperature","currentReading":100,"description":"id massa id nisl venenatis","status":false},
        {"id":42,"deviceType":"C","measures":"temperature","currentReading":129,"description":"duis aliquam convallis nunc proin at turpis a pede","status":true},
        {"id":43,"deviceType":"C","measures":"temperature","currentReading":187,"description":"ultrices enim lorem ipsum dolor sit","status":true},
        {"id":44,"deviceType":"C","measures":"temperature","currentReading":67,"description":"orci luctus et ultrices posuere cubilia","status":true},
        {"id":45,"deviceType":"C","measures":"temperature","currentReading":154,"description":"pulvinar nulla pede ullamcorper augue a suscipit","status":true}        
    ];
    return {devices};
  }
}