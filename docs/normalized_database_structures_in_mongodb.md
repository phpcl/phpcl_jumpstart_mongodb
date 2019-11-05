# "Normalized" Database Structures in MongoDB

## Questions and More Questions
A question that often arises is: "is it possible to create a _normalized_ database structure in MongoDB?"
The short answer is *yes*.
But the next question that follows is: "but I heard that MongoDB doesn't support SQL JOINs!"
At this my ears perk up, and inwardly I smile, a sharp mental "Ah hah!" ringing inside my head.
Am I nuts (don't answer that! rhetorical question!)?
Well ... some might argue otherwise ... but, like a smart person, hopefully in full stable grasp of my mental acquity, I must now defend my answer.

## Myths and Legends
First ... we must take you back in time.  To a galaxy long ago and far far away ... oops!  Wrong script.
OK, getting serious now, back in the Early Days of MongoDB, all the way up until version 3.2,
the answer to my question would have involved a lot of mumbling, looking down at the feet, waving of hands, and other obfuscations.
I would then have had to begrudgingly say, "well ... you _can_ do a JOIN ... but ..."  And there you'd have me.
And thus was born the myth: _MongoDB cannot do SQL JOINs_.

As of version 3.2, however, a brilliant new _aggregation pipeline stage operator_ called *$lookup* was introduced.
To put it mildly, this operator is a game changer.
Now, supplying a number of simple and easily understood parameters, MongoDB DevOps can "have their cake and eat it too".
This one operator completely shatters the myth, and the MongoDB camp and now proudly lift their heads and give a resounding *YES* answer when asked about doing the equivalent of an SQL JOIN.

## Practicality
Now ... before you get too excited, let's circle back practical matters.
The entire reason for SQL JOINs to exist in the first place has to do with two driving factors:
* Disk space, at the time legacy RDBMS technology evolved, was at a premium
* When IBM introduced their [first 1 GB hard drive](https://www.pcworld.com/article/127105/article.html) in 1980, it cost a mere $40,000 dollars US, was the proverbial "size of a refrigerator", and weighed 550 pounds.  Mind you, according to [DollarTimes](https://www.dollartimes.com/inflation/inflation.php?amount=40000&year=1980), the value of $40,000 USD in 1980 would be $131,021.12 USD in the year 2019.
Accordingly, the first database vendor who could get to market with a database engine providing what we now know of as _normalization_ was the winner.
However ... as we are all aware, the cost of storage has dropped dramatically, and RDMBS technology is now going on 50 years old, an Epoch in computer terms.

## By Design
Rather than trying to do an SQL JOIN using MongoDB, you need to ask yourself a serious question: *why do it?*
If you have a well-thought-out document design, you avoid the need to even do an SQL JOIN.
Here is a very simple example to illustrate my point.
You know all the piddly little HTML SELECT dropdowns you need to implement when presenting forms for users to fill out?
In the traditional RDBMS world you would need to create a separate table for each of this sort of item.
Let's say you're working on website where users can create their own account.
Most users will have multiple ways they can be contacted: multiple phone numbers, multiple email addresses, multiple social media IDs, and so on.
In a traditional RDMBS environment you'd need to create a table for each of these items, with a foreign key pointing back to your `users` table.
Then, when retrieving information, you would need to craft an SQL JOIN which might look something like this:
```
SELECT * FROM users AS u
JOIN phones AS p ON p.userId = u.id
JOIN emails AS e ON e.userId = u.id
JOIN socials AS s ON s.userId = u.id
```
All this just to get information on one user!
In the MongoDB world you don't need to do this.  Instead, you would design your `users` collection document structure something like this:
```
user = {
    "userId"  : <string>,
    "phones"  : [<string>,<string>,etc.],
    "emails"  : [<string>,<string>,etc.],
    "socials" : [<string>,<string>,etc.]
}
```

## But What If ...
_OK wise guy_, you're thinking at this point, _but what if ..._ (fill in the blank).
What if the amount of information doesn't neatly fit into an embedded array?
So let's look at a potential _what if_ example: four collections, all related:
* _users_: people on the website who sign up for events
* _hotels_: venues where events are held
* _events_: title, date, and a link to a hotel
* _signups_ : links to `users` and `events`
In order to illustrate the point let's focus on `signups`.

## Un-normalized Signups Document Structure
When we generate reports, let's say that Management will probably want, in addition to the event title and date, demographic information on users, and information on the event venue (i.e. hotel) for events scheduled for the year 2021.
One very simple way to give our intrepid DevOp all the tools he or she needs to generate Management reports would be to simply embed a Hotel object into each Event, and embed a User and an Event object into each Signup document.
The structure would look extremely messy, but generating reports would be a cinch.
Here is how the structure might appear:
```
MongoDB 4.2.0 jed@jumpstart[up:1628602 secs]
1>db.signups.findOne();
{
	"_id" : ObjectId("5d9d3e3f21ecc82fb3833836"),
	"eventKey" : "CAT-RES-JP-644",
	"userKey" : "ALTOBEAN9560",
	"eventInfo" : {
		"eventKey" : "CAT-RES-JP-644",
		"propertyKey" : "DEST7420",
		"eventName" : "Cat Research Seminar",
		"eventDate" : "2020-06-10",
		"hotelInfo" : {
			"propertyKey" : "DEST7420",
			"hotelName" : "Destination Lodge",
            // etc.
		}
	},
	"userInfo" : {
		"userKey" : "ALTOBEAN9560",
		"name" : {
			"first" : "Alton",
			"last" : "Bean",
		},
		"address" : {
			"streetAddress" : "1235 Big Creek Ride",
			"city" : "Sigave",
			"country" : "WF",
			"postalCode" : "98620",
		},
        // etc.
	}
}

MongoDB 4.2.0 jed@jumpstart[up:1628610 secs]
```
OK, you get the idea!  So to generate the requested report, all you need to do is to execute this query:
```
filter = { "eventInfo.eventDate" : { "$regex" : "^2021" } }
projection = {
    "_id" : 0,
    "eventInfo.eventName" : 1,
    "eventInfo.eventDate" : 1,
    "eventInfo.hotelInfo.hotelName" : 1,
    "eventInfo.hotelInfo.location.city" : 1,
    "eventInfo.hotelInfo.location.country" : 1,
    "userInfo.name.first" : 1,
    "userInfo.name.last" : 1
}
db.signups.find(filter,projection).sort({"eventInfo.eventDate":1});
```

## Normalized Structure
What if you _wanted_ to "normalize" the structure?  How would that appear?
Well ... we could pretty much strip out all fields except for the "foreign keys", and end up with something like this:
```
MongoDB 4.2.0 jed@jumpstart[up:1629201 secs]
16>db.signup_ltd.findOne();
{
	"_id" : ObjectId("5d9d3e3f21ecc82fb3833836"),
	"eventKey" : "CAT-RES-JP-644",
	"userKey" : "ALTOBEAN9560"
}
```
In order to generate the same report as above we would then need to do the equivalent of an SQL JOIN.
Impossible you say?
Now it's time to pull out our hidden gem: the *$lookup* aggregation pipeline stage operator.

## Performing an SQL JOIN Using $lookup
As you will recall from our discussion above, each `events` document contains a reference to the hotel.
And, as you saw just above, the "normalized" collection structure represented by `signup_ltd` only has the user and event keys.
Let's put the whole thing together with a single query using *$lookup*.
### Join `signup_ltd` to `users`
The first step is to bring documents from `users` into the the pipe.
This can be accomplished as follows:
```
    { $lookup :
        {
            "from"         : "users",
            "localField"   : "userKey",
            "foreignField" : "userKey",
            "as"           : "userInfo"
        }
    },
```
The `from` param points to the `users` collection.
The value for `localField` would be the foreign key in the `signup_ltd` collection.
`foreignField` is the key in the `users` collection.
Finally, we use `as` to add a new field to the pipe, in this case `userInfo` representing an entire matching document.
### Join `signup_ltd` to `events`
Next we need to do something similar, but this time adding an new field `eventInfo` representing an entire matching document from the `events` table:
```
    { $lookup :
        {
            "from"         : "event_ltd",
            "localField"   : "eventKey",
            "foreignField" : "eventKey",
            "as"           : "eventInfo"
        }
    },
```
### Filter Dates
Now that `eventInfo` is in the pipe, it's a simple matter to add a `$match` pipeline stage to filter documents matching the target year:
```
    { $match:
        { "eventInfo.eventDate" : { "$regex" : "^2021" } }
    },
```
### Join Hotel Information
Technically it's not necessary to join with the `hotels` collection, unless we have already "normalized" the `events` collection.
You might have noticed that this is the case as the `event_ltd` collection is referenced, which has been normalized.
Accordingly, to add hotel information, we add another lookup:
```
    { $lookup :
        {
            "from"         : "hotels",
            "localField"   : "eventInfo.propertyKey",
            "foreignField" : "propertyKey",
            "as"           : "hotelInfo"
        }
    },
```

### Whole Query
To complete the query, we add a `$projection` stage that produces the fields required by Management.
Here is how the whole query might appear:
```
db.signup_ltd.aggregate([
    { $lookup :
        {
            "from"         : "users",
            "localField"   : "userKey",
            "foreignField" : "userKey",
            "as"           : "userInfo"
        }
    },
    { $lookup :
        {
            "from"         : "event_ltd",
            "localField"   : "eventKey",
            "foreignField" : "eventKey",
            "as"           : "eventInfo"
        }
    },
    { $match:
        { "eventInfo.eventDate" : { "$regex" : "^2021" } }
    },
    { $lookup :
        {
            "from"         : "hotels",
            "localField"   : "eventInfo.propertyKey",
            "foreignField" : "propertyKey",
            "as"           : "hotelInfo"
        }
    },
    { $project :
        {
            "_id" : 0,
            "eventInfo.eventName" : 1,
            "eventInfo.eventDate" : 1,
            "hotelInfo.hotelName" : 1,
            "hotelInfo.location.city" : 1,
            "hotelInfo.location.country" : 1,
            "userInfo.name.first" : 1,
            "userInfo.name.last" : 1
        }
    }
]);
```

## And That's All She Wrote

And that wraps up the discussion.  As you (hopefully) learned, MongoDB does support "normalized" database document design.  Here are a couple of key points to take away from this article:

* It is possible to do the equivalent of an SQL JOIN in MongoDB use the $lookup aggregation pipeline operator.
* Nothing substitutes for a solid, well-thought-out database document structure design.

Thanks for reading.