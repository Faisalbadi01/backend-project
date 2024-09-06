const express = require('express');

const jwt = require('jsonwebtoken');

const secret = "faisal@12@34";



    const auth = (req, res, next) => {


    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: "no token provided" });

    try {

        const decoded = jwt.verify(token, secret);
        console.log(decoded)
        req.userId = decoded.id;
        req.userRole = decoded.role;

        if (decoded.role == 'Admin') {
            next();
        }
        else {
            res.status(500).json({ decoded })
        }

      } catch (error) {
        res.status(401).json({ message: 'invaild token' })
      }


      }

      module.exports = auth;