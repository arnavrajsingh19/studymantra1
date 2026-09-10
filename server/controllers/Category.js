<<<<<<< HEAD
const mongoose = require("mongoose");
const Category = require("../models/Category");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const defaultCategories = [
  { _id: "cat_1", name: "Web Development", description: "Learn HTML, CSS, JavaScript, React, Node.js and modern fullstack web development.", courses: [] },
  { _id: "cat_2", name: "Android Development", description: "Build native mobile apps using Kotlin and Android Studio.", courses: [] },
  { _id: "cat_3", name: "Python & Data Science", description: "Master Python programming, machine learning, and data analysis.", courses: [] },
  { _id: "cat_4", name: "DevOps & Cloud", description: "Learn Docker, Kubernetes, AWS, and modern CI/CD pipelines.", courses: [] },
];
=======
const { Mongoose } = require("mongoose");
const Category = require("../models/Category");
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8

exports.createCategory = async (req, res) => {
	try {
		const { name, description } = req.body;
		if (!name) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
<<<<<<< HEAD
		if (mongoose.connection.readyState !== 1) {
			return res.status(200).json({
				success: true,
				message: "Category Created Successfully (Offline Mode)",
			});
		}
=======
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
		});
		console.log(CategorysDetails);
		return res.status(200).json({
			success: true,
<<<<<<< HEAD
			message: "Category Created Successfully",
=======
			message: "Categorys Created Successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};

exports.showAllCategories = async (req, res) => {
	try {
        console.log("INSIDE SHOW ALL CATEGORIES");
		const allCategorys = await Category.find({});
		res.status(200).json({
			success: true,
			data: allCategorys,
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

<<<<<<< HEAD
exports.showAllCategories = async (req, res) => {
	try {
		console.log("INSIDE SHOW ALL CATEGORIES");
		if (mongoose.connection.readyState !== 1) {
			return res.status(200).json({
				success: true,
				data: defaultCategories,
			});
		}
		const allCategorys = await Category.find({});
		return res.status(200).json({
			success: true,
			data: (allCategorys && allCategorys.length > 0) ? allCategorys : defaultCategories,
		});
	} catch (error) {
		console.log("Error in showAllCategories, returning fallback default categories:", error.message);
		return res.status(200).json({
			success: true,
			data: defaultCategories,
		});
	}
};

=======
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
//categoryPageDetails 

exports.categoryPageDetails = async (req, res) => {
    try {
<<<<<<< HEAD
      const { categoryId } = req.body;
      console.log("PRINTING CATEGORY ID: ", categoryId);

      if (mongoose.connection.readyState !== 1) {
        const found = defaultCategories.find(c => c._id === categoryId || c.name.toLowerCase() === (categoryId || "").toLowerCase()) || defaultCategories[0];
        return res.status(200).json({
          success: true,
          data: {
            selectedCategory: found,
            differentCategory: defaultCategories[1] || found,
            mostSellingCourses: [],
          },
        });
      }

=======
      const { categoryId } = req.body
      console.log("PRINTING CATEGORY ID: ", categoryId);
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
      // Get courses for the specified category
      const selectedCategory = await Category.findById(categoryId)
        .populate({
          path: "courses",
          match: { status: "Published" },
          populate: "ratingAndReviews",
        })
<<<<<<< HEAD
        .exec();
  
      if (!selectedCategory) {
        console.log("Category not found.");
        return res.status(200).json({
          success: true,
          data: {
            selectedCategory: defaultCategories[0],
            differentCategory: defaultCategories[1],
            mostSellingCourses: [],
          },
        });
      }

      // Get courses for other categories
      const categoriesExceptSelected = await Category.find({
        _id: { $ne: categoryId },
      });
      let differentCategory = null;
      if (categoriesExceptSelected.length > 0) {
        differentCategory = await Category.findOne(
          categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]._id
        )
          .populate({
            path: "courses",
            match: { status: "Published" },
          })
          .exec();
      }

=======
        .exec()
  
      //console.log("SELECTED COURSE", selectedCategory)
      // Handle the case when the category is not found
      if (!selectedCategory) {
        console.log("Category not found.")
        return res
          .status(404)
          .json({ success: false, message: "Category not found" })
      }
      // Handle the case when there are no courses
      if (selectedCategory.courses.length === 0) {
        console.log("No courses found for the selected category.")
        return res.status(404).json({
          success: false,
          message: "No courses found for the selected category.",
        })
      }
  
      // Get courses for other categories
      const categoriesExceptSelected = await Category.find({
        _id: { $ne: categoryId },
      })
      let differentCategory = await Category.findOne(
        categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
          ._id
      )
        .populate({
          path: "courses",
          match: { status: "Published" },
        })
        .exec()
        //console.log("Different COURSE", differentCategory)
      // Get top-selling courses across all categories
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
      const allCategories = await Category.find()
        .populate({
          path: "courses",
          match: { status: "Published" },
          populate: {
            path: "instructor",
<<<<<<< HEAD
          },
        })
        .exec();

      const allCourses = allCategories.flatMap((category) => category.courses || []);
      const mostSellingCourses = allCourses
        .sort((a, b) => (b?.sold || 0) - (a?.sold || 0))
        .slice(0, 10);

      return res.status(200).json({
        success: true,
        data: {
          selectedCategory,
          differentCategory: differentCategory || selectedCategory,
          mostSellingCourses,
        },
      });
    } catch (error) {
      console.log("Error in categoryPageDetails:", error.message);
      return res.status(200).json({
        success: true,
        data: {
          selectedCategory: defaultCategories[0],
          differentCategory: defaultCategories[1],
          mostSellingCourses: [],
        },
      });
    }
};
=======
        },
        })
        .exec()
      const allCourses = allCategories.flatMap((category) => category.courses)
      const mostSellingCourses = allCourses
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 10)
       // console.log("mostSellingCourses COURSE", mostSellingCourses)
      res.status(200).json({
        success: true,
        data: {
          selectedCategory,
          differentCategory,
          mostSellingCourses,
        },
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
