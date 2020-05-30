import axios from 'axios';

class Authentication
{
    static configure()
    {
        axios.defaults.withCredentials = true;
    }

    static getCurrentUser(done)
    {
        axios.get('http://localhost:3000/user/current').then(res => {
            done(null, res.data.user);
        }).catch(err => {
            done(err, null);
        })
    }

    static isAuthenticated(done)
    {
        axios.get('http://localhost:3000/user/current').then(res => {
            var auth = false;
            if(res.data.user)
            {
                auth = true;
            }

            done(null, auth);
        }).catch(err => {
            done(err, false);
        })
    }
    
    static login(username, password, done)
    {
        axios.post('http://localhost:3000/user/login', {username: username, password: password}).then(res => {
            done();
        }).catch(err => {
            console.log(err);
        });
    }

    static logout(done)
    {
        axios.get('http://localhost:3000/user/logout').then(res => {
            done(res);
        }).catch(err => {
            console.log(err);
        });
    }

    static register(username, password, done)
    {
        axios.post('http://localhost:3000/user/create', {username: username, password: password}).then(res => {
            done(res);
        }).catch(err => {
            console.log(err);
        });
    }

}

export default Authentication;
