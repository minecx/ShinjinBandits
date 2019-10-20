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
    
    func pingHost(_ IPAddress: String) {
        let _test: String = "https://api.datamuse.com/words?ml=antic+city"
        let url = URL(string: IPAddress)

        let task = URLSession.shared.dataTask(with: url!) { _, response, _ in
            if let httpResponse = response as? HTTPURLResponse {
                print("Response code: \(httpResponse.statusCode)")
            }
            else {
                print("Connected failed, httpResponse: \(String(describing: response))")
            }
        }
        task.resume()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

}

