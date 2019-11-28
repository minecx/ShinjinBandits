//
//  ViewController.swift
//  CameraTracker
//
//  Created by Chongbin (Bob) Zhang on 2019/10/12.
//  Copyright © 2019 Bob. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var IPAddress: UITextField!
    @IBAction func connect(_ sender: UIButton) {
        pingHost(IPAddress.text!)
    }
    
    func showAlert() {
        let alertController = UIAlertController(title: "iOScreator", message:
            "Hello, world!", preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "Dismiss", style: .default))

        self.present(alertController, animated: true, completion: nil)
    }
    
    func pingHost(_ IPAddress: String) {
        let url = URL(string: IPAddress)
        let defaultURL = URL(string: "1.1.1.1")
        print("url: \(String(describing: url ?? defaultURL))")
        /*
        let test: String = "https://api.datamuse.com/words?ml=antic+city"
        let url = URL(string: test)
        */
        let task = URLSession.shared.dataTask(with: url!) { _, response, _ in
            if let httpResponse = response as? HTTPURLResponse {
                print("Response code: \(httpResponse.statusCode)")
                // return true
            }
            else {
                // return false
            }
        }
        task.resume()
        // return true
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

}

