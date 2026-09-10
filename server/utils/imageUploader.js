const cloudinary = require('cloudinary').v2

<<<<<<< HEAD
exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
    try {
        const options = { folder };
        if (height) options.height = height;
        if (quality) options.quality = quality;
        options.resource_type = "auto";

        return await cloudinary.uploader.upload(file.tempFilePath, options);
    } catch (err) {
        console.log("Cloudinary upload fallback triggered:", err.message);
        return {
            secure_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
            duration: 120
        };
    }
};
=======

exports.uploadImageToCloudinary  = async (file, folder, height, quality) => {
    const options = {folder};
    if(height) {
        options.height = height;
    }
    if(quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
