from flask import Flask,render_template,request
#from datetime import datetime

app = Flask(__name__)

"""
postback = []

def store_postback(url)
    postback.append(dict(
        url = url,
        user = "valenteer",
        date = datetime.utcnow()
        ))

@app.route("/psot", methods = ['GET','POST'])
def post():
    if request.method == "POST":
        url = request.form['url']
        store_postback(url)

    return render_template("post.html")

"""

@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("error.html"), 404

app.run(debug=True, use_reloader=True)