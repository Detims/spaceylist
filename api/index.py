from flask import Flask, redirect, url_for, render_template, request, jsonify
import os

app = Flask(__name__, 
           template_folder='../templates',
           static_folder='../static')

# Your existing routes
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/<path:path>')
def catch_all(path):
    return redirect(url_for('index'))

# ===== Vercel-Specific Additions =====
@app.route('/api/search')
def search():
    """Example API endpoint"""
    return jsonify({"message": "Search endpoint works!"})

def vercel_handler(request):
    """Required for Vercel serverless functions"""
    with app.app_context():
        response = app.full_dispatch_request()()
    return {
        "statusCode": response.status_code,
        "headers": dict(response.headers),
        "body": response.get_data(as_text=True)
    }

if __name__ == '__main__':
    app.run()
else:
    # This makes it work both locally and on Vercel
    app = app