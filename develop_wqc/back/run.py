from app import create_app

apps = create_app()

def debug():
    """
    Run in debug mode
    TO use: python run.py debug
    """
    apps.logger.setLevel('DEBUG')
    apps.run(host='127.0.0.1', port=5000, debug=True)

if __name__ == '__main__':
    debug()